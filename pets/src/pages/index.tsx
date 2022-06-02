import type { NextPage } from 'next'
import Titulo from "../ui/components/Titulo/Titulo"
import Lista from "../ui/components/Lista/Lista"

const Home: NextPage = () => {
  return (
    <div>
      <Titulo 
      titulo = "" 
      subtitulo = {
          <span>
            Com um pequeno valor mensal, você <br />
            pode <strong>adotar um pet virtualmente</strong>
          </span>
      } />

      <Lista 
        pets={[
          {
            id: 1,
            nome: "Bidu",
            historia: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla vel nisi eveniet eos, eum assumenda eius pariatur harum placeat fugiat eaque velit voluptatibus itaque est corrupti, sequi, possimus optio nesciunt.",
            foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXt_ayVdYJ30YFllKnM4f9Z-Q2WFDiULExXQ&usqp=CAU"
          },
          {
            id: 2,
            nome: "Lala",
            historia: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla vel nisi eveniet eos, eum assumenda eius pariatur harum placeat fugiat eaque velit voluptatibus itaque est corrupti, sequi, possimus optio nesciunt.",
            foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzGhd3BTVss112PxbCXCYh970ljC_pHTZRFQ&usqp=CAU"
          }
      ]}
      />
    </div>
  )
}

export default Home
