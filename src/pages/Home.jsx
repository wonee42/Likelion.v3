import React, { useState, useEffect } from "react";
import ProductList from "../components/ProductList";
import SortToggle from "../components/SortToggle";
import styled from "styled-components";

export default function Home() {
  const [sortOrder, setSortOrder] = useState("low");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch("https://shopping-website-server.onrender.com/clothes")
      .then((res) => {
        if (!res.ok) {
          throw new Error("서버에서 의류 데이터를 가져오지 못했습니다.");
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data);    
        setLoading(false);    
      })
      .catch((err) => {
        console.error(err);
        setError(err.message); 
        setLoading(false);     
      });
  }, []); 
  const sortedProducts = [...products].sort((a, b) =>
    sortOrder === "low" ? a.price - b.price : b.price - a.price
  );

  if (loading) {
    return (
      <Container>
        <p>상품 목록을 불러오는 중…</p>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <p>에러 발생: {error}</p>
      </Container>
    );
  }
  return (
    <Container>
      <Logo>TAYLOR<br />SWIFT</Logo>
      <SortToggle sortOrder={sortOrder} setSortOrder={setSortOrder} />
      <ProductList products={sortedProducts} />
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.h1`
  font-family: 'serif';
  font-weight: bold;
  font-size: 2.2rem;
  line-height: 1.1;
  letter-spacing: 2px;
  margin-bottom: 40px;
  text-align: left;
`;
