CREATE DATABASE tlp_ecommerce;

-- Declara tipo padrao para cpf

CREATE DOMAIN tipo_cpf AS varchar(11);

----------------------------------------------
-- Estrutura tabela Usuario

CREATE TABLE users(cpf, email, senha, pnome, snome, is_adm)(
  id_user serial NOT NULL,
  cpf tipo_cpf NOT NULL UNIQUE,
  email varchar(100) UNIQUE,
  senha varchar(100) NOT NULL,
  pnome varchar(50) NOT NULL,
  snome varchar(50),
  is_adm boolean NULL,

  PRIMARY KEY(id_user)
)

-- Inserindo dados tabela users

INSERT INTO users VALUES
  ( '12345678910', 'gabriel@gmail.com', '12345', 'Gabriel', 'Heifel', true ),
  ( '10987654321', 'joao@outlook.com', '54321', 'Joao', 'Silva', false ),
  ( '10987654201', '123@hotmail.com', 'senha123', 'Pedro', 'Silveira', false );

----------------------------------------------
-- Estrutura tabela Endereço

CREATE TABLE addresses(
  id_user int NOT NULL,
  cep varchar(8) NOT NULL,
  uf varchar(3) NOT NULL,
  cidade varchar(50) NOT NULL,
  rua varchar(100) NOT NULL,
  numero int NOT NULL,
  complemento varchar(100),

  PRIMARY KEY(id_user),
  FOREIGN KEY(id_user) REFERENCES users
);

-- Inserindo dados tabela addresses

INSERT INTO addresses VALUES
  ( 1, '96030002', 'RS', 'Pelotas', 'av. D. C', '123', ''),
  ( 2, '96030002', 'RS', 'Pelotas', 'av. D. C', '456', 'bloco 3, apto 200'),
  ( 3, '96003000', 'RS', 'santa vitoria', 'rua C. P.', '555', '');

----------------------------------------------

-- Estrutura tabela Produtos

CREATE TABLE product(
  id_prod serial NOT NULL,
  categoria varchar(50) NOT NULL,
  descricao text NOT NULL,
  imagem varchar(200),
  tamanho int NOT NULL,
  preco numeric(4,2) NOT NULL,

  PRIMARY KEY(id_prod)
);

-- Inserindo dados tabela product

INSERT INTO product(categoria, descricao, imagem, tamanho, preco) VALUES
  ('kids', 'Urso comendo mel', 'ursomel.jpg', 16, 50.00),
  ('flores', 'Buque de lavandas', 'lavanda.jpg', 20, 70.00),
  ('amor', 'Casal de mãos dadas', 'casal.jpg', 25, 90.00);

----------------------------------------------

-- Estrutura tabela Carrinho

CREATE TABLE carrinho(
  id_carrinho serial NOT NULL,
  id_user int NOT NULL,
  soma_preco numeric(5,2) NULL,

  PRIMARY KEY(id_carrinho),
  FOREIGN KEY(id_user) REFERENCES users
);

-- Inserindo dados tabela carrinho

INSERT INTO carrinho(id_user, soma_preco) VALUES
  (1, 120.00),
  (2, 50.00),
  (3, 160.00);

----------------------------------------------

-- Estrutura tabela Adiciona Produto no Carrinho

CREATE TABLE adiciona(
	id_prod int NOT NULL,
	id_carrinho int NOT NULL,

  PRIMARY KEY(id_prod, id_carrinho),
  FOREIGN KEY(id_prod) REFERENCES product,
  FOREIGN KEY(id_carrinho) REFERENCES carrinho
);

-- Inserindo dados tabela adiciona

INSERT INTO adiciona VALUES
  (1,1), (2,1),     -- produtos 1 e 2 no carrinho 1
  (1,2),            -- produto 1 no carrinho 2
  (2,3), (3,3);     -- prdotuos 2 e 3 no carrinho 3


----------------------------------------------

-- Estrutura tabela Compras Finalizadas

CREATE TABLE finalizado(
	id_carrinho int NOT NULL,
  id_user int NOT NULL,
  forma_pag varchar(20) NOT NULL,
  preco_total numeric(5,2) NOT NULL,
	data_compra timestamp NOT NULL,

  PRIMARY KEY(id_carrinho),
  FOREIGN KEY(id_carrinho) REFERENCES carrinho,
  FOREIGN KEY(id_user) REFERENCES users
);

-- Inserindo dados finalizado

INSERT INTO finalizado VALUES
  (1, 1, 'visa', 120.00, '13/12/20 10:23:54'),
  (2, 2, 'boleto', 50.00, '14/12/20 11:25:02'),
  (3, 3, 'mastercard', 160.00, '14/12/20 14:45:11');

-- -- Estrutura tabela administrador

-- CREATE TABLE adm(
--   cpf tipo_cpf NOT NULL,
--   is_adm varchar(1),

--   PRIMARY KEY(cpf,is_adm),
--   FOREIGN KEY(cpf) REFERENCES users
-- );

-- -- Inserindo dados tabela adm

-- INSERT INTO adm VALUES
--   ()
----------------------------------------------