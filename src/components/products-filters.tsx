import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const productsFiltersSchema = z.object({
  id: z.string(),
  name: z.string(), // Da pra add mais validação.
})

type ProductsFiltersSchema = z.infer<typeof productsFiltersSchema> // Para inferir o tipo do dado

export function ProductsFilters() {


  const { register, handleSubmit } = useForm<ProductsFiltersSchema>({
    resolver: zodResolver(productsFiltersSchema) // Resolver é para a validação.
  });


  function handleFilterProducts(data: ProductsFiltersSchema) {
    console.log(data)
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