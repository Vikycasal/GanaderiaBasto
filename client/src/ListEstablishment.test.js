import React from "react"
import {screen, render} from "@testing-library/jest-dom/extend-expect"
import {render} from "@testing-library/react"
import ListEstablishment from "./ListEstablishment"

test("renders contest", () =>{
    const list = {
    content: "this is a test"
    important: true
}
const component = render(<ListEstablishment listestablishment={listestablishment}/>)

console.log(component)
})