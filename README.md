# Pizzeroo

Pienimuotoinen sovellus ravintoloiden arvosteluun, kehitelty lähinnä oppimisprojektiksi. Sisältää käyttöliittymän ja yksinkertaisen RESTful-sovelluspalvelurajapinnan.
\
Ulkoiset dokumentaatiot
---------------------
[Express](https://expressjs.com/)\
[React](https://reactjs.org/)\
[Sequelize ORM](http://docs.sequelizejs.com/)

Tietokannan pystytys
---------------------
HUOM! Windowsin natiivi cmd ei aja kaikkia komentoja, käytettävä esim. powershelliä tai git bashia.
1. Asenna haluamasi tietokanta
2. Luo tiedosto `config/config.js`, kopioi `config/configExample` -tiedoston sisältö ja muuta development -objektin attribuutit vastaamaan tietokantapalvelimesi asetuksia 
3. Jos et ole luonut uutta kantaa tietokantapalvelimellesi, aja juuressa: `node_modules/.bin/sequelize db:create`
4. Luo kantaan taulut: `node_modules/.bin/sequelize db:migrate`

Tietokannan tyhjennys, esim jos kantaa muutetaan:\
`node_modules/.bin/sequelize db:migrate:undo:all`\
Tämän jälkeen kannan uudelleenpystytys toistamalla kohta 4.

Node.js serverin ajaminen juuresta
---------------------
**Portissa 3001**\
UNIX:\
`DEBUG=myapp:* npm start`\
Windows:\
`set DEBUG=myapp:* & npm start`

**Jossakin muussa portissa**\
UNIX:\
`DEBUG=myapp:* PORT={portti} npm start`\
Windows:\
`set DEBUG=myapp:* & set PORT={portti} & npm start`

**Serverin käynnistys [nodemonilla](https://github.com/remy/nodemon) (hot reload nodelle)**\
Muuten sama kuin ylempänä mutta `npm` tilalle `nodemon`.

React deviserverin ajaminen juuresta
---------------------
`cd client && npm start`
