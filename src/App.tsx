import React from 'react';
import './App.css';

const contacts = [
  { name: 'Email', link: 'mailto:hello@kartiksharma.xyz?subject=Hello%20from%20website' },
  { name: 'LinkedIn', link: 'http://linkedin.com/in/kartik-chdev' },
  { name: 'Github', link: 'http://github.com/crazyhitty' }
]

function App() {
  return (
    <div className="App">
      <div className="Name">{"Kartik Sharma"}</div>
      <div className="Designation">{"Sr. Software Engg @ Myntra"}</div>
      <div className="Frameworks"><b>Frameworks:</b> Android, React Native</div>
      <div className="Languages"><b>Languages:</b> Java, Kotlin, Typescript and a little bit of Python</div>
      <div className="Contacts">
        {contacts.map(({ name, link }) => (<a key={name} className="Contact" href={link}>{name}</a>))}
      </div>
    </div>
  );
}

export default App;
