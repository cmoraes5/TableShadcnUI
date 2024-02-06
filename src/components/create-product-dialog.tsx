import { DialogContent, DialogTitle, DialogDescription, DialogClose } from "./ui/dialog";
import { Button } from "./ui/button";
import { DialogHeader, DialogFooter } from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProduct } from "@/data/products";

const createProductSchema = z.object({
  name: z.string(),
  price: z.coerce.number(),
})

type CreateProductSchema = z.infer<typeof createProductSchema>



export function CreateProductDialog() {
  const queryClient = useQueryClient()

  const { register, handleSubmit } = useForm<CreateProductSchema>({
    resolver: zodResolver(createProductSchema),
  })

  const { mutateAsync: createProductFn } = useMutation({
    mutationFn: createProduct,
    onSuccess(_, variables) {
      const cached = queryClient.getQueryData(['products'])

      queryClient.setQueryData(['products'], data => {
        return [...data, {
          name: variables.name,
          price: variables.price
        }]
      })
    },
  })

  async function handleCreateProduct(data: CreateProductSchema) {
    try {
      await createProductFn({
        name: data.name,
        price: data.price
      })

      alert('Produto cadastrado com sucesso!')
      
    } catch (error) {
      alert('Erro ao cadastrar produto')
    }
  }

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Novo produto</DialogTitle>
        <DialogDescription>Criar um novo produto no sistema</DialogDescription>
      </DialogHeader>

      <form onSubmit={handleSubmit(handleCreateProduct)} className="space-y-6">
        <div className="grid grid-cols-4 items-center text-right gap-3">
          <Label htmlFor="name">Produto</Label>
          <Input className="col-span-3" id="name" {...register('name')} />
        </div>

        <div className="grid grid-cols-4 items-center text-right gap-3">
          <Label htmlFor="price">Preço</Label>
          <Input className="col-span-3" id="price" {...register('price')} />
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="outline">Cancelar</Button>
          </DialogClose>
          <Button type="submit">Salvar</Button>
        </DialogFooter>
      </form>
    </DialogContent>
  )
}