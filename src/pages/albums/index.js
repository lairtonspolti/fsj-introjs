import * as albumService from "../../service/albumService";

const PageAlbums = async () => {
  try {
    let allAlbuns = await albumService.getAllAlbums();
    console.log(allAlbuns);

    const algumListContainer = document.createElement("div");
  } catch (error) {
    console.log("deu ruim", error);
  }
};

//todo. teste
export default PageAlbums;
