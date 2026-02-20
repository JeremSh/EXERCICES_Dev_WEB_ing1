const Input = ({ richText, ...resteProps }: any) => {
  //On vérifie s'il y a une propriété richText, si c'est le cas on return un textarea, sinon on retourne un input
    if (richText) {
    // On retourne le textArea avec les propsiété autre que richText
    return <textarea {...resteProps} />;
  }
  // On retourne le input avec les propsiété
  return <input {...resteProps} />;
};

export default Input;