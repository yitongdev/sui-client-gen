import {
  PhantomReified,
  Reified,
  StructClass,
  ToField,
  ToTypeStr,
  decodeFromFields,
  decodeFromFieldsWithTypes,
  decodeFromJSONField,
  phantom,
} from "../../../../../_framework/reified.js";
import {
  FieldsWithTypes,
  composeSuiType,
  compressSuiType,
} from "../../../../../_framework/util.js";
import { PKG_V21 } from "../../constants.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64, fromHex, toHex } from "@mysten/sui/utils";

export function isValidatorOperationCap(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V21}::validator_cap::ValidatorOperationCap`;
}

export interface ValidatorOperationCapFields {
  authorizerValidatorAddress: ToField<"address">;
}

export type ValidatorOperationCapReified = Reified<
  ValidatorOperationCap,
  ValidatorOperationCapFields
>;

/**
 * Move struct: `ValidatorOperationCap`
 * Module: `0000000000000000000000000000000000000000000000000000000000000003::validator_cap`
 */
export class ValidatorOperationCap implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V21}::validator_cap::ValidatorOperationCap`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = ValidatorOperationCap.$typeName;
  readonly $fullTypeName: `${typeof PKG_V21}::validator_cap::ValidatorOperationCap`;
  readonly $typeArgs: [];
  readonly $isPhantom = ValidatorOperationCap.$isPhantom;

  readonly authorizerValidatorAddress: ToField<"address">;

  private constructor(typeArgs: [], fields: ValidatorOperationCapFields) {
    this.$fullTypeName = composeSuiType(
      ValidatorOperationCap.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V21}::validator_cap::ValidatorOperationCap`;
    this.$typeArgs = typeArgs;

    this.authorizerValidatorAddress = fields.authorizerValidatorAddress;
  }

  static reified(): ValidatorOperationCapReified {
    return {
      typeName: ValidatorOperationCap.$typeName,
      fullTypeName: composeSuiType(
        ValidatorOperationCap.$typeName,
        ...[],
      ) as `${typeof PKG_V21}::validator_cap::ValidatorOperationCap`,
      typeArgs: [] as [],
      isPhantom: ValidatorOperationCap.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) =>
        ValidatorOperationCap.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        ValidatorOperationCap.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => ValidatorOperationCap.fromBcs(data),
      bcs: ValidatorOperationCap.bcs,
      fromJSONField: (field: any) => ValidatorOperationCap.fromJSONField(field),
      fromJSON: (json: Record<string, any>) =>
        ValidatorOperationCap.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) =>
        ValidatorOperationCap.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) =>
        ValidatorOperationCap.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) =>
        ValidatorOperationCap.fetch(client, id),
      new: (fields: ValidatorOperationCapFields) => {
        return new ValidatorOperationCap([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return ValidatorOperationCap.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<ValidatorOperationCap>> {
    return phantom(ValidatorOperationCap.reified());
  }
  static get p() {
    return ValidatorOperationCap.phantom();
  }

  static get bcs() {
    return bcs.struct("ValidatorOperationCap", {
      authorizer_validator_address: bcs.bytes(32).transform({
        input: (val: string) => fromHex(val),
        output: (val: Uint8Array) => toHex(val),
      }),
    });
  }

  static fromFields(fields: Record<string, any>): ValidatorOperationCap {
    return ValidatorOperationCap.reified().new({
      authorizerValidatorAddress: decodeFromFields(
        "address",
        fields.authorizer_validator_address,
      ),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): ValidatorOperationCap {
    if (!isValidatorOperationCap(item.type)) {
      throw new Error("not a ValidatorOperationCap type");
    }

    return ValidatorOperationCap.reified().new({
      authorizerValidatorAddress: decodeFromFieldsWithTypes(
        "address",
        item.fields.authorizer_validator_address,
      ),
    });
  }

  static fromBcs(data: Uint8Array): ValidatorOperationCap {
    return ValidatorOperationCap.fromFields(
      ValidatorOperationCap.bcs.parse(data),
    );
  }

  toJSONField() {
    return {
      authorizerValidatorAddress: this.authorizerValidatorAddress,
    };
  }

  toJSON() {
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField(),
    };
  }

  static fromJSONField(field: any): ValidatorOperationCap {
    return ValidatorOperationCap.reified().new({
      authorizerValidatorAddress: decodeFromJSONField(
        "address",
        field.authorizerValidatorAddress,
      ),
    });
  }

  static fromJSON(json: Record<string, any>): ValidatorOperationCap {
    if (json.$typeName !== ValidatorOperationCap.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return ValidatorOperationCap.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): ValidatorOperationCap {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isValidatorOperationCap(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a ValidatorOperationCap object`,
      );
    }
    return ValidatorOperationCap.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): ValidatorOperationCap {
    if (data.bcs) {
      if (
        data.bcs.dataType !== "moveObject" ||
        !isValidatorOperationCap(data.bcs.type)
      ) {
        throw new Error(`object at is not a ValidatorOperationCap object`);
      }

      return ValidatorOperationCap.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return ValidatorOperationCap.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(
    client: SuiClient,
    id: string,
  ): Promise<ValidatorOperationCap> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching ValidatorOperationCap object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isValidatorOperationCap(res.data.bcs.type)
    ) {
      throw new Error(
        `object at id ${id} is not a ValidatorOperationCap object`,
      );
    }

    return ValidatorOperationCap.fromSuiObjectData(res.data);
  }
}
