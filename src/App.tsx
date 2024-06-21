import { MouseEvent, useEffect, useState } from 'react'
import { Button } from './components/ui/button'
import { Input } from './components/ui/input'

interface Product{
  id: number
  name: string
  price: number
}


function App() {
  const [count, setCount] = useState(0);
  const [productList, setProductList] = useState<Product []>();
  const [newProductName, setNewProductName] = useState("");
  const [newProductPrice, setNewProductPrice] = useState(0);

  useEffect(() => {
    const mockData : Product [] = [
        { id: 1, name: 'Product 1', price: 100 },
        { id: 2, name: 'Product 2', price: 200 },
        { id: 3, name: 'Product 3', price: 300 },
    ]
    setProductList(mockData);
  
  }, [])

  const showAlert = (e : MouseEvent<HTMLButtonElement>) => {
    console.log(e);
  }

  const updateProductName = (e : React.ChangeEvent<HTMLInputElement>) => {
    setNewProductName(e.target.value);
  }

  const updateProductPrice = (e : React.ChangeEvent<HTMLInputElement>) => {
    setNewProductPrice(parseFloat(e.target.value));
  }

  const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(newProductName, newProductPrice);
    setProductList((prev) => {
      if (!prev) {
        return [
          {
            id: 1,
            name: newProductName,
            price: newProductPrice
          }
        ]
      }
      return [
        ...prev,
        {
          id: prev.length + 1,
          name: newProductName,
          price: newProductPrice
        }
      ]
    })
    setNewProductName("");
    setNewProductPrice(0);

    getText<string>('Hello');
    getText<number>(123);
    // getText<number>('123');
    
  }
  
  function getText<T>(text: T){
    console.log(typeof text);
    return text;
  }

  return (
    <div>
      <header>
        <h1 className='text-3xl font-bold text-center p-3 bg-slate-900 text-slate-50'>Vite+react-typescript</h1>
      </header>
      <main className='flex justify-center items-center flex-col'>
        <div className='flex flex-col items-center w-[50%] bg-slate-100 p-3'>
          <div className='flex flex-col p-3 items-center'>
            <h2 className='text-3xl'> This is a Counter</h2>
            <h3 className='text-xl text-blue-300'>{count}</h3>
          </div>
          <Button onClick={() => setCount((c) => c + 1)} className='w-[30%]'>Increment</Button>
        </div>
        <div className='flex flex-col items-center w-[50%] m-3'>
          <h1 className='text-3xl'>Product List</h1>
          {productList?.map((product) => {
            return (
              <div key={product.id} className='p-1 m-1 border-2 rounded-lg w-[80%] flex justify-between'>
                <h2 className='font-bold text-xl mx-2'>{product.name}</h2>
                <p className='underline mx-2'>${product.price}</p>
              </div>
            )
          })}
          <form onSubmit={handleSubmit} className='flex w-[50%]'>
            <Input type='text' className='m-1' placeholder='Product Name' onChange={updateProductName} />
            <Input type='number' className='m-1' placeholder='Product Price' onChange={updateProductPrice}/>
            <Button className='m-1' onClick={showAlert}>ADD</Button>
          </form>
        </div>
      </main>
    </div>
  )
}

export default App
