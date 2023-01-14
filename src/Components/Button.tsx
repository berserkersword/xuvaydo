
const Button = (props:{text:string}) => {
  return (
    <button type="button" className=" focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2  focus:outline-none ">{props.text}</button>
  )
}

export default Button