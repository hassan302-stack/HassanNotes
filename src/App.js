import React, { useState, useEffect } from 'react';
import Notes from "./notes"
import { Data } from "./dataArray";
function App() {
  const [render, setrender] = useState(true)
  const [newNotes, setnewNotes] = useState([{ id: 1, Notes: "1" }, { id: 1, Notes: "2" }])

  let sort = (b) => {

    const sortedArray = b.map((v, i) => {
      return { ...v, id: i }
    })
    return sortedArray
  }
  const del = (i) => {
    console.log("before filter i: ", i);
    let b = newNotes.filter((val, ind) => {
      console.log("->", ind);
      return ind !== i

    })

    // const sortarray = sort(b)
    //setnewNotes(sortarray)
    setnewNotes(b)
    console.log(newNotes);
    // console.log(sortarray);
    //console.log(sortarray);

  }

  //  console.log(newNotes);
  return (

    <>
      <div className="main">

        {/* <Notes render={setrender} newArr={newNotes} ids={newNotes.length} /> */}
        <div className="notespocket">
          {newNotes.map((val, ind) => {
            debugger
            //console.log(val.note);
            return (
              <div className="note">
                <textarea readOnly
                  name="note"
                  id=""
                  cols="30"
                  rows="10"


                >{val.Notes}</textarea>
                <button type="submit" className="add" onClick={() => del(ind)}  >
                  x
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </>
  );
}

export default App;
