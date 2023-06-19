export default function Human(props) {
    const {id, name, age} = props;

    return (
        <>
            <p className="p-id">Id : {id}</p>
            <p>Nama : {name}</p>
            <p>Umur : {age}</p>
        </>
    );
}