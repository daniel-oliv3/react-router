import { useState } from "react";
import { useParams } from "react-router-dom";

export default function About() {

  const [usuarios] = useState(['Daniel', 'Priscila']);
  const {id} = useParams();

    return (
      <>
        <h1>Sobre Nós</h1>
        <p>{usuarios[id]}</p>
      </>
    );
  }