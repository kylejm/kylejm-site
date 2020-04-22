export interface InstaPost {
  caption: string
  media_url: string
  permalink: string
}

export async function getInstaPosts(): Promise<InstaPost[]> {
  let reponse = await fetch('https://kylejm.herokuapp.com/v1/insta')
  let { data } = await reponse.json()
  return data.map((postData: any) => {
    return {
      caption: postData.caption,
      media_url: postData.media_url,
      permalink: postData.permalink
    }
  })
}
