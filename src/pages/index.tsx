import Head from 'next/head';
import SafeEnvironment from 'ui/components/feedback/SafeEnvironment/SafeEnvironment';

export default function Home() {
  return (
  <div>
    <SafeEnvironment/>
    <Text>Atualizção</Text>
  </div>
  )
}