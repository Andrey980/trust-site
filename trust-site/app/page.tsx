import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/home');
  return null; // This line will never be reached
}
