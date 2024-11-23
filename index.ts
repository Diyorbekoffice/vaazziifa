// // 1. **Promise va then/catch bilan API so'rovlarini ketma-ket bajarish**
// const urls1 = [
//     "https://jsonplaceholder.typicode.com/posts/1",
//     "https://jsonplaceholder.typicode.com/posts/2",
//     "https://jsonplaceholder.typicode.com/posts/3",
//   ];
  
//   function fetchSequentially(urls: string[]): void {
//     let promise = Promise.resolve(); // Boshlang'ich bo'sh va'da
//     urls.forEach((url) => {
//       promise = promise
//         .then(() => {
//           console.log(`Fetching from URL: ${url}`);
//           return fetch(url).then((res) => res.json());
//         })
//         .then((data) => console.log("Result:", data))
//         .catch((error) => console.error("Error fetching:", error));
//     });
//   }
  
//   fetchSequentially(urls1);
  
//   // 2. **Promise.all bilan ma’lumotlarni yig'ish**
//   const url1 = "https://jsonplaceholder.typicode.com/users";
//   const url2 = "https://jsonplaceholder.typicode.com/posts";
  
//   function fetchInParallel(urls: string[]): void {
//     Promise.all(urls.map((url) => fetch(url).then((res) => res.json())))
//       .then((results) => console.log("Fetched data:", results))
//       .catch((error) => console.error("Error fetching data:", error));
//   }
  
//   fetchInParallel([url1, url2]);
  
//   // 3. **Promise.race bilan birinchi bajarilgan natijani olish**
//   const urls2 = [
//     "https://jsonplaceholder.typicode.com/photos",
//     "https://jsonplaceholder.typicode.com/todos",
//     "https://jsonplaceholder.typicode.com/comments",
//   ];
  
//   function fetchFirstCompleted(urls: string[]): void {
//     Promise.race(urls.map((url) => fetch(url).then((res) => res.json())))
//       .then((result) => console.log("First completed request result:", result))
//       .catch((error) => console.error("Error fetching first result:", error));
//   }
  
//   fetchFirstCompleted(urls2);
  
  // 4. **Async/await bilan API so'rovlarini ketma-ket bajarish**
//   const urls1: string[] = [
//     "https://api.example.com/data1",
//     "https://api.example.com/data2",
//     "https://api.example.com/data3",
//   ];
  
//   async function fetchSequentiallyAsync(urls: string[]): Promise<void> {
//     for (const url of urls) {
//       try {
//         console.log(`Fetching from URL: ${url}`);
//         const response = await fetch(url);
//         const data = await response.json();
//         console.log("Result:", data);
//       } catch (error) {
//         console.error("Error fetching:", error);
//       }
//     }
//   }
  
//   fetchSequentiallyAsync(urls1);
  
  
//   // 5. **Async/await bilan paralel so'rovlar**
// const url1: string = "https://api.example.com/data1";
// const url2: string = "https://api.example.com/data2";

// async function fetchInParallelAsync(urls: string[]): Promise<void> {
//   try {
//     const results = await Promise.all(
//       urls.map((url) => fetch(url).then((res) => res.json()))
//     );
//     console.log("Fetched data:", results);
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// }

// fetchInParallelAsync([url1, url2]);

  
//   // 6. **Async/await bilan birinchi muvaffaqiyatli natijani olish**
//  const urls2: string[] = [
//   "https://api.example.com/data1",
//   "https://api.example.com/data2"
// ];

// async function fetchFirstCompletedAsync(urls: string[]): Promise<void> {
//   for (const url of urls) {
//     try {
//       const response = await fetch(url);
//       const data = await response.json();
//       console.log("First successful request result:", data);
//       return; 
//     } catch (error) {
//       console.error(`Error fetching from ${url}:`, error);
//     }
//   }
//   console.log("All requests failed.");
// }

// fetchFirstCompletedAsync(urls2);

  
//   // 7. **Generic: Ma’lumotlarni o‘rab beruvchi funksiya**
//   function wrapData<T>(data: T): { status: string; data: T } {
//     return { status: "success", data };
//   }
  
//   console.log(wrapData("Hello, world!")); 
//   console.log(wrapData(42)); 
  
//   // 8. **Generic: Bir xil turdagi massivlarni solishtirish**
//   function findCommonElements<T>(arr1: T[], arr2: T[]): T[] {
//     return arr1.filter((item) => arr2.includes(item));
//   }
  
//   console.log(findCommonElements([1, 2, 3, 4], [3, 4, 5, 6])); 
//   console.log(
//     findCommonElements(["apple", "banana", "cherry"], ["banana", "cherry", "date"])
//   ); 
  
//   // 9. **Generic: Ma’lumotlarni saqlovchi generik klass**
// class CustomStorage<T> {
//     private items: T[] = [];
  
//     addItem(item: T): void {
//       this.items.push(item);
//     }
  
//     removeItem(item: T): void {
//       this.items = this.items.filter((i) => i !== item);
//     }
  
//     getItems(): T[] {
//       return this.items;
//     }
//   }
  
//   const stringStorage = new CustomStorage<string>();
//   stringStorage.addItem("apple");
//   stringStorage.addItem("banana");
//   stringStorage.removeItem("apple");
//   console.log(stringStorage.getItems()); 
  
//   const numberStorage = new CustomStorage<number>();
//   numberStorage.addItem(42);
//   numberStorage.addItem(7);
//   numberStorage.removeItem(7);
//   console.log(numberStorage.getItems());
  