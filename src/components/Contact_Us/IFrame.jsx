const IFrame = () => {
  return (
    <div className="w-11/12 mx-auto h-[500px]  mt-20">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3455.583022144382!2d31.3184211!3d29.9914113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2seg!4v1751461017811!5m2!1sen!2seg"
        className="w-full h-full"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default IFrame;
