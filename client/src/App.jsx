
import { useState } from "react";
import {BrowserRouter, Routes, Router, Navigate, Route} from "react-router-dom";
import Chat from "@/components/chat/chat";
function App() {

  return (
    <div className="app">
    <BrowserRouter>
    <Routes>
      <Route path="/chat" element={<Chat /> } />
    </Routes>
  </BrowserRouter>
    </div>
  )
}

export default App
