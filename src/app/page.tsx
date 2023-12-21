import House from "@/app/components/House"

export default function Home() {
  return (
    <main>
      <House color="yellow" player="player-1" />
      <House color="red" player="player-2"/>
      <House color="blue" player="player-3"/>
      <House color="green" player="player-4"/>
    </main>
  )
}
