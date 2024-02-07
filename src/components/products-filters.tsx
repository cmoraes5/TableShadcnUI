import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams } from "react-router-dom";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Search } from "lucide-react";

const productsFiltersSchema = z.object({
  id: z.string(),
  name: z.string(), // Da pra add mais validação.
})

type ProductsFiltersSchema = z.infer<typeof productsFiltersSchema> // Para inferir o tipo do dado

export function ProductsFilters() {
  const [searchParams, setSearchParams] = useSearchParams()

  const id = searchParams.get('id')
  const name = searchParams.get('name')

  const { register, handleSubmit } = useForm<ProductsFiltersSchema>({
    resolver: zodResolver(productsFiltersSchema), // Resolver é para a validação.
    values: {
      id: id ?? '',
      name: name ?? '',
    }
  });


  function handleFilterProducts({ id, name }: ProductsFiltersSchema) {
    setSearchParams(state => {
      if (id) {
        state.set('id', id)
      } else {
        state.delete('id')
      }

      return state
    })
    
    setSearchParams(state => {
      if (name) {
        state.set('name', name)
      } else {
        state.delete('name')
      }

      return state
    })
  }

  return (
    <form onSubmit={handleSubmit(handleFilterProducts)} className="flex items-center gap-2">
      <Input placeholder="ID do pedido" {...register('id')} />
      <Input placeholder="Nome do produto" {...register('name')} />

      <Button type="submit" variant="secondary">
        <Search className="w-4 h-4 mr-2" />
        Filtrar resultados
      </Button>
    </form>
  )
}