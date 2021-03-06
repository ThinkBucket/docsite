---
id: insertion-sort
title: 插入排序
---

## 扑克牌

插入排序算法类似于玩扑克时抓牌的过程，玩家每拿到一张牌都要插入到手中已有的牌里，使之从小到大排好序。

<Img w="330" src='https://cosmos-x.oss-cn-hangzhou.aliyuncs.com/sngd1C.png' alt='sngd1C' legend="图：《算法导论》扑克牌的插入排序"/>

也许你没有意识到，但其实你的思考过程是这样的：现在抓到一张 7，把它和手里的牌从右到左依次比较，7 比 10 小，应该再往左插，7 比 5 大，好，就插这里。为什么比较了 10 和 5 就可以确定 7 的位置？为什么不用再比较左边的 4 和 2 呢？因为这里有一个重要的前提：手里的牌已经是排好序的。现在我插了 7 之后，手里的牌仍然是排好序的，下次再抓到的牌还可以用这个方法插入。

插入排序也是同样道理，但和插入扑克牌有一点不同，不可能在两个相邻的存储单元之间再插入一个单元，因此**要将插入点之后的数据依次往后移动一个单元**。

## 思想

插入排序会把待排序列划分为两个区间，已排序区间和未排序区间。初始已排序区间只有第一个元素。插入算法的核心思想是**取未排序区间中的元素，在已排序区间中找到合适的位置将其插入，并保证已排序区间数据一直有序**。重复这个过程，直到未排序区间中元素为空，算法结束。

如下图所示，待排序列是 `5, 4, 6, 2, 1, 3`，其中左侧为已排序区间，右侧是未排序区间。

<Img w="400" src='https://cosmos-x.oss-cn-hangzhou.aliyuncs.com/Rp5Blw.png' alt='Rp5Blw'/>

排序的过程中设计到两种操作，一种是和已排序区间的元素比较，找插入位置，另一种是当找到插入位置后，插入位置之后的元素移动。

需要注意的是元素的移动次数是与逆序数相同的，如下图所示：

<Img w="510" src='https://cosmos-x.oss-cn-hangzhou.aliyuncs.com/DBx8cJ.png' alt='DBx8cJ'/>

我们可以计算出初始序列的逆序数（11）和移动元素个数总和（11）是完全相等的。

## 实现

```js
/* 插入排序思想：第一个元素有序，从第二个元素开始，在前面有序的元素中一次比较找到合适的插入位置*/
/*空间复杂度O(1),时间复杂度在完全有序时为O(n)，倒序时为最坏情况，时间复杂度O(n^2) */

function insertionSort(arr) {
  const length = arr.length;
  if (length <= 1) return arr;

  for (let i = 1; i < length; i++) {
    let value = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > value) {
      // 对已有序的元素遍历，如果值大于value就继续向前找，不大于的话就插入，插入排序是稳定排序
      arr[j + 1] = arr[j];
      j--;
    }

    if (j + 1 !== i) {
      // 如过arr[i]不用移动，那么就不需要插入操作
      arr[j + 1] = value;
    }
  }

  return arr;
}
```

## 分析

### 空间复杂度

通过上面的算法实现可以看出，该算法不需要额外的辅助空间，即空间复杂度为 O(1)。

### 时间复杂度

- 完全有序时，不需要移动元素，只比较一次就可以找到插入位置，这也是最好的情况，时间复杂度为 O(n)。
- 倒序时，每次插入都相当于在数组的第一个位置插入新的数据，需要移动所有的已排序数据，也是最坏的情况，时间复杂度为 O(n^2)。
- 每次在已排序区间寻找插入位置的平均时间复杂度为 O(n)，所以循环 n 次插入的算法平均时间复杂度为 O(n^2)。

### 稳定性

在插入排序中，对于值相同的元素，我们可以选择将后面出现的元素，插入到前面出现元素的后面，这样就可以保持原有的前后顺序不变，所以插入排序是稳定的排序算法。

## 参考资料

1. [Linux C 编程一站式学习：插入排序, by 宋劲杉](https://www.bookstack.cn/read/linux-c/d53e0ec0b3a76f34.md)
