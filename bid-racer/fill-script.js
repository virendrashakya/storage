$('table > tbody  > tr').each(function (index, tr) {
  l1_bid_rank = $(this).find(`span#__text47-__xmlview0--idUtclVCVendorAssignmentTable-${index}`).text();
  if (!l1_bid_rank) {
    filled_value = $(this).find(`#__xmlview0--idBidAmount-__xmlview0--idUtclVCVendorAssignmentTable-${index}-inner`).val();
    if (filled_value == 0) {
      $(this).find(`#__xmlview0--idBidAmount-__xmlview0--idUtclVCVendorAssignmentTable-${index}-inner`).focus();
      bid_amount = $(this).find(`span#__text45-__xmlview0--idUtclVCVendorAssignmentTable-${index}`).text();
      $(this).find(`#__xmlview0--idBidAmount-__xmlview0--idUtclVCVendorAssignmentTable-${index}-inner`).val(bid_amount);
    }
  }
});
