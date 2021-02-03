import qoreContext from "../qoreContext";

export default function Home() {
  const members = qoreContext.view("allMember").useListRow();
  const firstMember = members.data[0];
  return <div>Hello {firstMember ? firstMember.email : "..."}</div>;
}
