import {toTitleCase} from '../utils/stringUtilities';

export const mockData = [
  {
  postId: 35,
  id: 1,
  name: "AndrEs qDOT",
  email: "EliSeo@gardner.biz",
  body: "laudantium enim quasi est quidem magnam voluptate ipsam eos tempora quo necessitatibus dolor quam autem quasi reiciendis et nam sapiente accusantium"
  },
  {
  postId: 1,
  id: 2,
  name: "SEBASTIAN",
  email: "seBBa@sydney.com",
  body: "est natus enim nihil est dolore omnis voluptatem numquam et omnis occaecati quod ullam at voluptatem error expedita pariatur nihil sint nostrum voluptatem reiciendis et"
  },
  {
  postId: 32,
  id: 3,
  name: "odio adipisci rerum aut animi",
  email: "Nikita@garfield.biz",
  body: "quia molestiae reprehenderit quasi aspernatur aut expedita occaecati aliquam eveniet laudantium omnis quibusdam delectus saepe quia accusamus maiores nam est cum et ducimus et vero voluptates excepturi deleniti ratione"
  },
  {
  postId: 55,
  id: 4,
  name: "alias odio sit",
  email: "Lew@alysha.tv",
  body: "non et atque occaecati deserunt quas accusantium unde odit nobis qui voluptatem quia voluptas consequuntur itaque dolor et qui rerum deleniti ut occaecati"
  },
  {
  postId: 1,
  id: 5,
  name: "vero eaque aliquid doloribus et culpa",
  email: "Hayden@althea.biz",
  body: "harum non quasi et ratione tempore iure ex voluptates in ratione harum architecto fugit inventore cupiditate voluptates magni quo et"
  }
  ]

export const formattedMockData = mockData.map((value, index) => {
  const {name, email, id, postId, body} = value;
  return ({name: toTitleCase(name), email: email.toLocaleLowerCase(), body, id, postId })
    
  })

