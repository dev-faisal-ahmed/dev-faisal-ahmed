type EmailType = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export function emailTemplate({ name, email, subject, message }: EmailType) {
  return `
  <!doctype html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
      rel="stylesheet"
    />
    <script src="https://cdn.tailwindcss.com"></script>
    <title></title>
  </head>
  <body>
    <div class="mx-auto w-fit min-w-[350px] max-w-[650px] py-10">
      <h1 class="text-xl font-semibold">New Message</h1>
      <div class="mt-4 space-y-2 rounded-md border-2 border-black/20 p-3">
        <h4 class="text-lg font-semibold">
          Name : <span class="font-normal text-gray-600">${name}</span>
        </h4>
        <h4 class="text-lg font-semibold">
          Email : <span class="font-normal text-blue-500 underline">${email}</span>
        </h4>
        <h4 class="text-lg font-semibold">
          Subject : <span class="font-normal text-gray-600">${subject}</span>
        </h4>
        <div>
          <h4 class="text-lg font-semibold">Message</h4>
          <p class="text-justify text-gray-500">${message}</p>
        </div>
      </div>
    </div>
  </body>
</html>
`;
}
