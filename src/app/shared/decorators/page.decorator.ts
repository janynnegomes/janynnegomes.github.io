// Decorator Factory
export function AutoPageInfo(): ClassDecorator {
    // Decorator Function
    return (target): void => {
  
      const onInitOriginal = target.prototype.ngOnInit;
      
      // override original ngOnInit
      target.prototype.ngOnInit = function(): void {
        console.log('passei');
        // Executa as instruções de ngOnInit da classe
        // onde o decorator foi aplicado
        if (onInitOriginal) {
            
          onInitOriginal.apply(this);
        }
      };
  
    };
  
  }