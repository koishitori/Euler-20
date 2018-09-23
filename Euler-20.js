var nums = [1];
var num_limit = 100000;
var until = 100;
for( var i = 1; i <= until; i++ ){
  for( var j = 0; j < nums.length; j++ )
    nums[j]*=i;
  for( var j = 0; j < nums.length; j++ )
    if(nums[ j ] >= num_limit ){
      var temp = nums[ j ] % ( num_limit );
      if( nums.length == ( j + 1 ) )
        nums.push( ( nums[ j ] - temp ) / ( num_limit ) );
      else
        nums[ j + 1 ] += ( nums[ j ] - temp ) / ( num_limit );
      nums[ j ] = temp;
    }
}
var ans = 0;
for( var i = 0; i < nums.length; i++ )
  nums[ i ] = nums[ i ].toString().split("");
for( var i = 0; i < nums.length; i++ )
  for( var j = 0; j < nums[ i ].length; j++ )
    ans += nums[ i ][ j ] * 1;
ans;
