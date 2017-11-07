/*
Usage:

<YouTube
   video='XC3-DoDFLLw'
   autoplay='0'
   rel='0'
   showInfo='0'
/>
*/

const YouTube = ({ video, autoplay, rel, showInfo }) => (
  <iframe
    title="youtube"
    type="text/html"
    width="100%"
    height="100%"
    src={`https://www.youtube.com/embed/${video}?autoplay=${autoplay}&rel=${rel}&showinfo=${showInfo}`}
    frameBorder="0"
  />
);

export default YouTube;
