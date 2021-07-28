import '../css/loginModal.css';


function LoginModal({handleClose, show}){
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <>
            <div id="myModal" class={showHideClassName}>
                <div class="modal-content">
                    <div className="loginModalContainer">
                        <a className="closeModal" href="#" onClick={handleClose}>X</a>
                        <div className="loginModalContent">
                            <div className="loginTitle">
                                <h2>Faça seu Login</h2>
                            </div>
                            <div className="loginInputs">
                                <div class="input-field">
                                    <input type="text" id="email" required />
                                    <label for="email">Email</label>
                                </div>
                                <div class="input-field">
                                    <input type="password" id="senha" required />
                                    <label for="senha">Senha</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>     
        </>
    );
}

export default LoginModal;