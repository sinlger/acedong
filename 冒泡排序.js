        var arr=[];
        
        //冒泡排序

        arr=[5,6,5,8,9,8,7,5,4,8,9,6,5,74,5,1,6,456,1,4,454,21,4,564,54,3];

        var t=null;

        for(let n=0,len=arr.length-1;n<=len;n++){


            for(let i=0,len2 =arr.length-i;i<=len2;i++){


                if(arr[i]<arr[i+1]){

                    t=arr[i];

                    arr[i]=arr[i+1];

                    arr[i+1]=t;
                }
            }
        }
        console.log(arr)
