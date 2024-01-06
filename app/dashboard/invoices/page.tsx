const sleep3 = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default async function Page() {
  await sleep3(1000);  
  return <p>invoices Page1</p>;
}