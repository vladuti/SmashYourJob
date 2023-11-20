import React, { useState } from "react";
import "../css/CV.css";
import jsPDF from "jspdf";

interface FormData {
  nume: string;
  prenume: string;
  email: string;
  telefon: string;
  educatie: string;
  experienta: string;
}

function CV() {
  const [formData, setFormData] = useState({
    nume: "",
    prenume: "",
    email: "",
    telefon: "",
    educatie: "",
    experienta: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const doc = new jsPDF();

    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.text("Europass CV", 20, 15);

    doc.setFont("helvetica");
    doc.setFontSize(12);
    doc.text(`Nume: ${formData.nume}`, 20, 30);
    doc.text(`Prenume: ${formData.prenume}`, 20, 40);
    doc.text(`Email: ${formData.email}`, 20, 50);
    doc.text(`Telefon: ${formData.telefon}`, 20, 60);
    doc.text(`Educatie: ${formData.educatie}`, 20, 70);
    doc.text(`Experienta: ${formData.experienta}`, 20, 80);

    const fileName = `cv_${formData.nume}_${formData.prenume}.pdf`;
    doc.save(fileName);
  };

  return (
    <div className="app-container">
      <h1>Generator CV</h1>
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nume:</label>
          <input
            type="text"
            name="nume"
            value={formData.nume}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Prenume:</label>
          <input
            type="text"
            name="prenume"
            value={formData.prenume}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Telefon:</label>
          <input
            type="text"
            name="telefon"
            value={formData.telefon}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Educație:</label>
          <textarea
            name="educatie"
            value={formData.educatie}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Experiență:</label>
          <textarea
            name="experienta"
            value={formData.experienta}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="submit-button">
          Generează și descarcă CV
        </button>
      </form>
    </div>
  );
}

export default CV;
