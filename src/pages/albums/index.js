import createAlbumList from "../../components/AlbumList";
import * as albumService from "../../service/albumService";

export const renderInputSearch = function renderInputSearch(initialValue = "") {
  // retornar um input
  const inputSearch = document.createElement("input");
  inputSearch.value = initialValue;
  inputSearch.setAttribute("placeholder", "Buscar álbum");
  return inputSearch;
};

const PageAlbuns = async () => {
  try {
    let allAlbuns = await albumService.getAllAlbuns();

    const albumListContainer = document.createElement("div");
    const albumList = createAlbumList(allAlbuns);
    const inputSearch = renderInputSearch();

    inputSearch.onkeyup = function searchAlbum(e) {
      console.log(e.target.value);
      albumListContainer.innerHTML = "";

      let albunsFilter = allAlbuns.filter((album) =>
        album.title.includes(e.target.value)
      );

      albumListContainer.appendChild(createAlbumList(albunsFilter));
    };

    albumListContainer.append(albumList);

    document.body.appendChild(inputSearch);
    document.body.appendChild(albumListContainer);
  } catch (error) {
    console.log("Deu ruim!", error);
  }
};

export default PageAlbuns;
