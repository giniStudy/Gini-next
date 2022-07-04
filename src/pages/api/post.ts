import boardList from './data.json';

export default async function handler(req: any, res: any) {
  const { page = 1, size = 10 } = req.url
    .split('?')[1]
    .split('&')
    .reduce((acc: any, query: any) => {
      const [key, value] = query.split('=');

      if (key) {
        acc[key] = decodeURIComponent(value);
      }

      console.log(acc);
      return acc;
    }, {} as Record<string, string>);

  const start = (Number(page) - 1) * Number(size);
  const end = Number(page) * Number(size);
  const filteredBoardList = boardList.slice(start, end);

  return res
    .status(200)
    .json({ boardList: filteredBoardList, totalCount: boardList.length });
}
