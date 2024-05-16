function Modal({ handleShowModal }) {
    return (
        <div className="fixed inset-0 z-40 flex items-center justify-center">
            <div className="fixed inset-0 bg-black opacity-35"></div>
            <div className="bg-white w-96 rounded-lg overflow-hidden z-10">
                <div className="p-6 md:p-4">
                    <div className="relative" style={{ paddingBottom: '56.25%' }}>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <iframe
                                title="Video"
                                className="absolute top-0 left-0 w-full h-full"
                                src="https://www.youtube.com/embed/3h0_v1cdUIA"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;
