import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ArrowRightIcon, MagnifyingGlassIcon } from '@heroicons/react/16/solid'
import { useId } from 'react'

const Search = () => {
  const id = useId()
  return (
    <div className="relative">
      <Label htmlFor={id} className="sr-only">
        Buscar no site
      </Label>
      <Input
        id={id}
        name="search"
        className="peer ps-9 pe-9"
        placeholder="Buscar..."
        type="search"
        aria-autocomplete="none"
        aria-describedby="search-instructions"
      />
      <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50">
        <MagnifyingGlassIcon className="size-4" />
      </div>

      <Button
        type="submit"
        className="absolute inset-y-0 end-0 w-9 rounded-none rounded-e-md text-muted-foreground/80 outline-none hover:bg-transparent hover:text-foreground"
        aria-label="Pesquisar"
        variant={'ghost'}
      >
        <ArrowRightIcon className="size-4" aria-hidden="true" />
        <span id="search-instructions" className="sr-only">
          Pressione Enter para pesquisar ou use o botão de submissão
        </span>
      </Button>
    </div>
  )
}

export default Search
