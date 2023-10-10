import { Users, UsersDetails } from "./Pages";

 const App = () => {
  return (
    <div className="flex flex-col">
      <h1 className="text-center text-2xl p-4 font-mono font-s">React Typescript CRUD App With ReduxToolkit</h1>
      <div className="flex flex-col justify-center items-center md:flex-row gap-4 w-full container mx-auto">
        <Users />
        <UsersDetails />
      </div>
    </div>
  );
}

export default App