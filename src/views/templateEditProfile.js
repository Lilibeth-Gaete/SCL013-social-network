export const editProfile = () => {
    const divEditProfile = document.createElement('div');
  
    const viewEditProfile = `
                            <section class="containerEditProfile">
                            <div class="colorContainerProfile">
                            <h1 class="titleEditProfile">¡Edita tu perfil!</h1>
                            <div class="infoEditProfile">
                            <i class="fas fa-user fa-5x"></i>
                            <button id="profileUploadBtn" class="profileUploadBtn">Subir foto</button>
                            <input type="text" placeholder="Nombre" id="name" class="nameProfile"/>
                            <input type="text" placeholder="Especialidad culinaria" id="specialty" class="specialty"/>
                             </div>
                             <div class="containerBtnProfile">
                            <button id="profileBtn" class="profileBtn">Guardar</button>
                            <button id="profileCancelBtn" class="profileCancelBtn">Cancelar</button>
                            </div>
                            </div>
                            </section>`;
  
    divEditProfile.innerHTML = viewEditProfile;

    divEditProfile.querySelector('#profileBtn').addEventListener('click', () => {
  
      const  db = firebase.firestore();{

        const nameProfile = document.querySelector('#name').value;
        const specialty = document.querySelector('#specialty').value;

        db.collection("users").add({
          name: nameProfile,
          specialty: specialty
          //born: 1815
        })
        .then(function(docRef) {
          console.log("Document written with ID: ", docRef.id);
          //document.querySelector('#name').value="";
          //document.querySelector('#specialty').value="";
        })
        .catch(function(error) {
          console.error("Error adding document: ", error);
        });
      
      
      }

    
    });

    return divEditProfile;
  };
  