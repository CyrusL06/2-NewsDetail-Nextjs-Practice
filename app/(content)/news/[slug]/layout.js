export default function NewsDetailLayout({children, modal}) {
    return (
        <>
        {/* Identifier in the folder */}
        {/* Outputs the 2 into a parralel Route */}
        {modal}
        {children}
        </>
    );
}