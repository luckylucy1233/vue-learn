<template>
	<div id="modal">
		<transition name='modal'>
			<!--modal背景-->
			<div class="modal-mask">
				<div class="modal-wrapper">
          <!--modal盒子-->
					<div class="modal-container">
						<div class="modal-header">
							<slot name='header'>
								default header
							</slot>
							<div class="modal-body">
								<slot name='body'>
									default body
								</slot>
							</div>
							<div class="modal-footer">
								<slot name='footer'>
									default footer
                  <!--$emit监听当前实例上的自定义事件,该方法不需要props传入，$emit会自动找到父组件中自定义事件-->
									<button class="modal-default-button" @click="$emit('close')" >
                    <!--<button class="modal-default-button" @click="de()" >-->
                    ok
                </button>
								</slot>
							</div>
						</div>
					</div>
				</div>
			</div>
		</transition>
	</div>
</template>

<script >

export default {
	name: 'modal',
	
}
</script>
<style>

	.modal-header h3 {
		margin-top: 0;
		color: #42b983;
	}
	
	.modal-body {
		margin: 20px 0;
	}
	
	.modal-default-button {
		float: right;
	}
</style>