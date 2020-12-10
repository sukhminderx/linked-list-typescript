import React from "react";
import logo from "./logo.png";
import "./App.css";
import { LinkedList } from "./SinglyLinkedList";

function App() {
  /* below contains algo ADT */
  // create the linked list
  const linkedList = new LinkedList();

  // add 1 to beginning
  linkedList.insertAtBeginning(1);
  // add some items 2,3,4,5 to the end
  linkedList.insertAtEnd(2);
  linkedList.insertAtEnd(3);
  linkedList.insertAtEnd(5);

  console.log('after insertAtEnd');
  linkedList.traverseAndPrintNode();

  // add 1 to beginning
  linkedList.insertAtBeginning(0);

  console.log('after insertAtBeginning');
  linkedList.traverseAndPrintNode();

  // insert in middle
  linkedList.insertAfterNode(3,4);

  console.log('after insertAfterNode');
  linkedList.traverseAndPrintNode();

  // delete first
  linkedList.deleteFirstNode();

  console.log('after deleteFirstNode');
  linkedList.traverseAndPrintNode();

  // delete last
  linkedList.deleteLastNode();

  console.log('after deleteLastNode');
  linkedList.traverseAndPrintNode();

  // delete node
  linkedList.deleteSpecificNode(3);

  console.log('after deleteSpecificNode 3');
  linkedList.traverseAndPrintNode();

  // delete list
  linkedList.deleteList();

  console.log('after deleteList');
  linkedList.traverseAndPrintNode();


  /* above contains algo ADT */
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 style={{
          color: 'black',
          marginTop: '100px'
        }}>Check your console for Linked List ADTS... visit <a href="https://www.gabruism.com">Gabruism</a></h1>
      </header>
    </div>
  );
}

export default App;
