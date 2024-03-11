# 💈 Barbearia Barba Rolling 💈

Esse é um projeto feito em [Next.js](https://nextjs.org) com a motivação de ser um projeto final para o processo de trainee da Empresa Júnior byron.solutions.

O repositório do projeto pode ser encontrado [aqui](https://github.com/PedroNB10/barber-shop-landing-page)

## 📱 Demonstração Visual do projeto

Link do site: [https://barber-shop-landing-page.vercel.app/](https://barber-shop-landing-page.vercel.app/)

<center>
  <img src="./readme-assets/responsividade.gif" alt="gif da animação do projeto">
</center>

## 💾 Para clonar o projeto use:

```
$ git clone https://github.com/PedroNB10/barber-shop-landing-page.git
```

## ⚙️ Configuração

Para que tenha o acesso a todas as funcionalidades do projeto como a de envio de formulário e autênticação com googleOAuth, renomeie o arquivo `.env.example` para `.env` e adicione as suas variáveis de ambiente:

```
GOOGLE_CLIENT_ID="xxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
GOOGLE_CLIENT_SECRET="xxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
NEXTAUTH_SECRET="xxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
NEXTAUTH_URL="http://localhost:3000"

NEXT_PUBLIC_EMAILJS_PUBLIC_KEY="xxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
NEXT_PUBLIC_TEMPLATE_ID="xxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
NEXT_PUBLIC_SERVICE_ID="xxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
```

As 3 últimas variáveis são da biblioteca [EmailJS](https://www.emailjs.com/) e as outras da biblioteca [NextAuth](https://next-auth.js.org/) e da API do Google. Além disso é preciso criar um projeto no [Google Console](https://console.cloud.google.com/) para que use a API do Google Calendar.

Segue um tutorial de configuração desse um projeto google similar:

[https://youtu.be/tgcCl52EN84?si=474uufmQk-r6exQV](https://youtu.be/tgcCl52EN84?si=474uufmQk-r6exQV)

Segue um tutorial para fazer a autenticação com google usando NextAuth:

[https://youtu.be/AbUVY16P4Ys?si=GnuAFyNReKBlWPK4](https://youtu.be/AbUVY16P4Ys?si=GnuAFyNReKBlWPK4)

Segue um tutorial para configuração do EmailJS:

[https://www.youtube.com/watch?v=Zbg1BHOVzRg](https://www.youtube.com/watch?v=Zbg1BHOVzRg)

## 💿 Inicialização

Para acessar o projeto é necessário inicializá-lo em um server. Isso pode ser feito da seguinte forma:

```
npm run dev
# or
yarn dev
```

Após isso, basta abrir http://localhost:3000 no navegador para visualizar o resultado.

## 📝 Edição

A edição da página é feita pelo arquivo `app/page.tsx` e `app/layout.tsx`. A página será atualizada automaticamente para acompanhar as edições.

Para adição de páginas adicionais ou outras features é recomendado o uso da documentação do [Next.js](https://nextjs.org/docs)

## 🔧 Linguagens e Ferramentas

- [Next](https://nextjs.org/)
- [React](https://react.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [JS](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [TS](https://www.typescriptlang.org/)
- [NextAuth](https://next-auth.js.org/)
- [HeroIcons](https://heroicons.com/)
- [FontAwesome](https://fontawesome.com/)
- [Sonner](https://sonner.emilkowal.ski/)
- [EmailJS](https://www.emailjs.com/)
- [Google Calendar API](https://developers.google.com/calendar/api/guides/overview?hl=pt-br)

## 👨🏻‍💻 Autores

- [Pedro Nogueira](https://github.com/PedroNB10)

- [Tomás Lavez](https://github.com/tomlavez)
