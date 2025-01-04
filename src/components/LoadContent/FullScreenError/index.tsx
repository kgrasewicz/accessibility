const FullScreenError = () => (
  <div className="grid gap-y-2 h-full justify-items-center content-center">
    <h2 className="lato-bold text-3xl uppercase mb-4">Błąd serwera</h2>
    <p className="text-grey-400">
      Przepraszamy, nasz zespół techniczny już pracuje nad naprawą błędu.
    </p>
    <span>
      Jeśli problem się utrzymuje, skontaktuj się z nami pod adresem{" "}
      <a className="text-link" href="mailto:accessbility.test@gmail.com">
        accessbility.test@gmail.com
      </a>
      .
    </span>
  </div>
);

export default FullScreenError;
