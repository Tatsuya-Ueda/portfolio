# [ABC334-B Christmas Trees](https://atcoder.jp/contests/abc334/tasks/abc334_b)

手こずったため覚え書き．

$$
S = \lbrace k | k \in \mathbb{Z}, L-A <= kM <= R-A \rbrace
$$

$$
S = \left\lbrace k | k \in \mathbb{Z}, \frac{L-A}{M} \leq k \leq \frac{R-A}{M} \right\rbrace
$$

こう表すと，$S$ の要素の数，$|S|$ が答えとなるはず．

ここで，2 つの実数 $a, b ~ (a \leq b)$ がなす範囲 $[a, b]$ 内にある整数の数は，

$$
\lfloor b \rfloor - \lceil a \rceil + 1
$$

で求まることに気が付いた．（このように区間を「狭め」ても，区間の外に出てしまう整数はひとつも無いため．）

しかし，Python で愚直に

```python
floor((R - A) / M) - ceil((L - A) / M) + 1
```

を計算したところ，**M による除算の精度が悪く，ceil, floor の結果が誤ったものになり，WA してしまった**．

## 対策

### その 1

```python
A, M, L, R = map(Decimal, input().split())
```

のように，標準入力から入力値を受け取る時点で `Decimal` にすることで，計算が `Decimal` 型で閉じるため，誤差を防ぐことができる．

### その 2

演算の途中に小数が現れると誤差の原因になるため，結果が小数となる演算をせずに済むならばそのほうが安全．

切り捨て除算は Python では`//`で計算できるが，整数同士の切り上げ除算も`//`を使って実現できる．

$a, b$ を整数とする． $\lfloor \frac{a}{b} \rfloor$ は次のように表せる．

```python
a // b
```

$\lceil \frac{a}{b} \rceil$ は次のように表せる．一見トリッキーに見えるが，成り立つ（分子に `b` を加えると 1 増えてしまうが，`b-1` を加えれば必ず加えた分が切り捨てられる）．

```python
(a + b - 1) // b
```

これらを用いると，`WA` してしまったときの計算式は，このように書き換えることができる．

```python
(R - A) // M - (L - A + M - 1) // M + 1
```
