import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin, MessageSquare } from "lucide-react";

const contactDetails = [
  {
    icon: Mail,
    title: "Email",
    value: "hridoy702345@gmail.com",
    href: "mailto:hridoy702345@gmail.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+880 1631-803278",
    href: "tel:+8801631803278",
  },
  {
    icon: MapPin,
    title: "Address",
    value: "Chittagong, Bangladesh",
    href: "#",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp",
    value: "+880 1631-803278",
    href: "https://wa.me/8801631803278",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");
    setSuccess(false);

    try {
      const response = await fetch(
        "https://server-xi-three-38.vercel.app/msg",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        },
      );

      const data = await response.json();
      if (data.insertedId) {
        setStatus("Message sent successfully!");
        setSuccess(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("Something went wrong!");
        setSuccess(false);
      }
    } catch (err) {
      console.error(err);
      setStatus("Failed to send message.");
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-py bg-base-200/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-3 block">
            05. Connection
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-foreground">
            Get In Touch
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-16 max-w-6xl mx-auto">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-3xl font-black italic">
                Let's build something extraordinary.
              </h3>
              <p className="text-base-content/60 leading-relaxed text-lg">
                I am currently open to new opportunities and collaborations. If
                you have a project in mind, feel free to reach out.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
              {contactDetails.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="p-6 bg-base-100 rounded-3xl border border-white/5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group flex items-center gap-5"
                >
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest opacity-40">
                      {item.title}
                    </p>
                    <p className="text-sm font-bold opacity-80">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-base-100 p-8 md:p-12 rounded-[3rem] border border-white/5 shadow-2xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="space-y-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest pl-4 opacity-40">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="MHS Doe"
                      className="w-full bg-base-200 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary/20 transition-all font-bold placeholder:opacity-30"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest pl-4 opacity-40">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="hridoy@example.com"
                      className="w-full bg-base-200 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary/20 transition-all font-bold placeholder:opacity-30"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest pl-4 opacity-40">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry"
                    className="w-full bg-base-200 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary/20 transition-all font-bold placeholder:opacity-30"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest pl-4 opacity-40">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your amazing project..."
                    className="w-full bg-base-200 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary/20 transition-all font-bold placeholder:opacity-30 resize-none"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn btn-primary btn-lg rounded-full w-full md:w-auto px-12 gap-3 hover:scale-105 transition-transform group shadow-lg shadow-primary/20"
                >
                  {loading ? "Sending..." : "Send Message"}{" "}
                  <Send
                    size={20}
                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  />
                </button>

                {status && (
                  <p
                    className={`mt-4 font-bold ${
                      success ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {status}
                  </p>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
