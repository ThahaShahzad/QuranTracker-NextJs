interface props {
  start: number
  end: number
}

export default function useArrayRange({ start, end }: props) {
  const foo = []
  for (var i = start; i <= end; i++) {
    foo.push(i)
  }
  return foo
}
