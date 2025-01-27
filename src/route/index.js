// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()
// ================================================================
var header = {

  name: {
    firstname: 'Petro',
    lastname: 'Ivanov',

  },
  position: 'Junior Fullstack JS Develop',
  salary: '600$ a mounts',
  adress: 'Ukraine,Kyiv,Perova St.',

}

var footer = {

  social: {
    email: {
      text: 'ivanov@gmail.com',
      href: 'mailto:ivanov@gmail.com',
    },
    phone: {
      text: '+380670000123',
      href: 'tel:+380670000123',
    },
    linkedin: {
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/dmytro-test',
    },
  },
}

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer

  res.render('summary', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume/Summary',

    },
    header,



    main: {
      summary: {
        title: 'Summary',
        text: 'Open-minded for techology with one year of experience in development.Open-minded for new technologies, with 1 years of experience in development. Whenever I start to work on a new project I learn the domain and try to understand the idea of the project.Good team player, every colleague is a friend to me',
      },
      experience: {
        title: 'Other experience',
        text: 'Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (tournament position, goals etc), analyzing by simple mathematics models and preparing probability for such events like: money line - first win / draw / second win, totals etc.',
      },

    },
    footer,






  })
})

// ================================================================

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer

  res.render('skills', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume/Skills',
    },
    header,


    main: {
      skills: [
        {
          name: "HTML",
          point: 10,
          isTop: true,
        },
        {
          name: "Handlebars",
          point: 10,
          isTop: true,
        },
        {
          name: "VS Code",
          point: 8,
          isTop: false,
        },
        {
          name: "Gid",
          point: 9,
        },
        {
          name: "Terminal",
          point: 9,
          isTop: false,
        },
        {
          name: "Npm",
          point: 8,

        },
        {
          name: "React.js",
          point: 0,
        },
        {
          name: "PHP",
          point: null,
        },
      ],
    },
    main: {
      hobbies: [
        {
          name: "Swimming",
          isMain: true,
        },
        {
          name: "Dancing",
          isMain: true,
        },
        {
          name: "Watchig films",
          isMain: false,
        },
      ],
    },


    footer,
  })
})


// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer

  res.render('education', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume/Education',
    },
    header,


    main: {

      schools: [
        {
          name: "СШ №246",
          isEnd: true,
        },
        {
          name: "СШ №86",
          isEnd: true,
        },

        {
          name: "Київський ліцей з математичним уклоном",
          isEnd: false,
        },
        {
          name: "Лінгвістичний ліцей",
          isEnd: false,
        },
      ],
    },

    main: {
      certifications: [
        {
          name: "сертефікат 1",
          id: 5647,
        },
        {
          name: "сертефікат 2",
          id: 3144,
        },
        {
          name: "сертефікат 4",
          id: 154878,
        },
      ],
    },


    footer,
  })
})
// Підключаємо роутер до бек-енду
module.exports = router
