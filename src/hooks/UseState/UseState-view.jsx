import React, { useState } from 'react';

export default function UseStateview() {
  console.log('UseStateView');
  const [count, setCount] = useState(0);
  const [character, setCharacter] = useState('a');
  const [animal, setAnimal] = useState({
    name: 'Ted',
    type: 'Dog',
    attributes: {
      furColor: ['white', 'brown'],
      eyeColor: 'brown',
    },
  });
  return (
    <div>
      <h2>UseState Hook</h2>
      <div>
        <h3>Counter</h3>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <hr />
      <div>
        <h3>Character</h3>
        <p>{character}</p>
        <div>
          <button onClick={() => setCharacter('a')}>a</button>
          <button onClick={() => setCharacter('b')}>b</button>
          <button onClick={() => setCharacter('c')}>c</button>
        </div>
      </div>
      <hr />
      <div>
        <h3>Animal</h3>
        <pre>{JSON.stringify(animal, null, 2)}</pre>
        <div>
          <h4>Type</h4>
          <button onClick={() => setAnimal({ ...animal, type: 'Cow' })}>
            Cow
          </button>
          <button onClick={() => setAnimal({ ...animal, type: 'Dog' })}>
            Dog
          </button>
          <button onClick={() => setAnimal({ ...animal, type: 'Chewbacca' })}>
            Chewbacca
          </button>
        </div>
        <div>
          <h4>Attributes</h4>
          <button
            onClick={() =>
              setAnimal({
                ...animal,
                attributes: { ...animal.attributes, furColor: ['blue'] },
              })
            }
          >
            Blue fur
          </button>
          <button
            onClick={() =>
              setAnimal({
                ...animal,
                attributes: { ...animal.attributes, eyeColor: 'red' },
              })
            }
          >
            Red eyes
          </button>
        </div>
      </div>
    </div>
  );
}
