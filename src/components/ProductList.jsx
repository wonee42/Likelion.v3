import styled from "styled-components";
import ProductCard from "./ProductCard";


export default function ProductList({ products }) {  
  return (
    <Grid>
      {products.map((item) => (
        <ProductCard
          key={item.id}
          name={item.name}
          price={item.price}
          image={item.image}
          category={item.category}
        />
      ))}
    </Grid>
  );
}

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 32px;
  width: 100vw;
  margin: 0 auto;
`;