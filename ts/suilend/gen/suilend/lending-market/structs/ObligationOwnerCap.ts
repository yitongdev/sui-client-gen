import {
  ID,
  UID,
} from "../../../_dependencies/onchain/0x2/object/structs/index.js";
import {
  PhantomReified,
  PhantomToTypeStr,
  PhantomTypeArgument,
  Reified,
  StructClass,
  ToField,
  ToPhantomTypeArgument,
  ToTypeStr,
  assertFieldsWithTypesArgsMatch,
  assertReifiedTypeArgsMatch,
  decodeFromFields,
  decodeFromFieldsWithTypes,
  decodeFromJSONField,
  extractType,
  phantom,
} from "../../../_framework/reified.js";
import {
  FieldsWithTypes,
  composeSuiType,
  compressSuiType,
  parseTypeName,
} from "../../../_framework/util.js";
import { PKG_V1 } from "../../constants.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isObligationOwnerCap(type: string): boolean {
  type = compressSuiType(type);
  return type.startsWith(`${PKG_V1}::lending_market::ObligationOwnerCap` + "<");
}

export interface ObligationOwnerCapFields<T0 extends PhantomTypeArgument> {
  id: ToField<UID>;
  obligationId: ToField<ID>;
}

export type ObligationOwnerCapReified<T0 extends PhantomTypeArgument> = Reified<
  ObligationOwnerCap<T0>,
  ObligationOwnerCapFields<T0>
>;

/**
 * Move struct: `ObligationOwnerCap`
 * Module: `f95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::lending_market`
 *
 * @typeParam T0 - Type parameter 0 (phantom)
 */
export class ObligationOwnerCap<T0 extends PhantomTypeArgument>
  implements StructClass
{
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::lending_market::ObligationOwnerCap`;
  static readonly $numTypeParams = 1;
  static readonly $isPhantom = [true] as const;

  readonly $typeName = ObligationOwnerCap.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::lending_market::ObligationOwnerCap<${PhantomToTypeStr<T0>}>`;
  readonly $typeArgs: [PhantomToTypeStr<T0>];
  readonly $isPhantom = ObligationOwnerCap.$isPhantom;

  readonly id: ToField<UID>;
  readonly obligationId: ToField<ID>;

  private constructor(
    typeArgs: [PhantomToTypeStr<T0>],
    fields: ObligationOwnerCapFields<T0>,
  ) {
    this.$fullTypeName = composeSuiType(
      ObligationOwnerCap.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::lending_market::ObligationOwnerCap<${PhantomToTypeStr<T0>}>`;
    this.$typeArgs = typeArgs;

    this.id = fields.id;
    this.obligationId = fields.obligationId;
  }

  static reified<T0 extends PhantomReified<PhantomTypeArgument>>(
    T0: T0,
  ): ObligationOwnerCapReified<ToPhantomTypeArgument<T0>> {
    return {
      typeName: ObligationOwnerCap.$typeName,
      fullTypeName: composeSuiType(
        ObligationOwnerCap.$typeName,
        ...[extractType(T0)],
      ) as `${typeof PKG_V1}::lending_market::ObligationOwnerCap<${PhantomToTypeStr<ToPhantomTypeArgument<T0>>}>`,
      typeArgs: [extractType(T0)] as [
        PhantomToTypeStr<ToPhantomTypeArgument<T0>>,
      ],
      isPhantom: ObligationOwnerCap.$isPhantom,
      reifiedTypeArgs: [T0],
      fromFields: (fields: Record<string, any>) =>
        ObligationOwnerCap.fromFields(T0, fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        ObligationOwnerCap.fromFieldsWithTypes(T0, item),
      fromBcs: (data: Uint8Array) => ObligationOwnerCap.fromBcs(T0, data),
      bcs: ObligationOwnerCap.bcs,
      fromJSONField: (field: any) =>
        ObligationOwnerCap.fromJSONField(T0, field),
      fromJSON: (json: Record<string, any>) =>
        ObligationOwnerCap.fromJSON(T0, json),
      fromSuiParsedData: (content: SuiParsedData) =>
        ObligationOwnerCap.fromSuiParsedData(T0, content),
      fromSuiObjectData: (content: SuiObjectData) =>
        ObligationOwnerCap.fromSuiObjectData(T0, content),
      fetch: async (client: SuiClient, id: string) =>
        ObligationOwnerCap.fetch(client, T0, id),
      new: (fields: ObligationOwnerCapFields<ToPhantomTypeArgument<T0>>) => {
        return new ObligationOwnerCap([extractType(T0)], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return ObligationOwnerCap.reified;
  }

  static phantom<T0 extends PhantomReified<PhantomTypeArgument>>(
    T0: T0,
  ): PhantomReified<ToTypeStr<ObligationOwnerCap<ToPhantomTypeArgument<T0>>>> {
    return phantom(ObligationOwnerCap.reified(T0));
  }
  static get p() {
    return ObligationOwnerCap.phantom;
  }

  static get bcs() {
    return bcs.struct("ObligationOwnerCap", {
      id: UID.bcs,
      obligation_id: ID.bcs,
    });
  }

  static fromFields<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    fields: Record<string, any>,
  ): ObligationOwnerCap<ToPhantomTypeArgument<T0>> {
    return ObligationOwnerCap.reified(typeArg).new({
      id: decodeFromFields(UID.reified(), fields.id),
      obligationId: decodeFromFields(ID.reified(), fields.obligation_id),
    });
  }

  static fromFieldsWithTypes<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    item: FieldsWithTypes,
  ): ObligationOwnerCap<ToPhantomTypeArgument<T0>> {
    if (!isObligationOwnerCap(item.type)) {
      throw new Error("not a ObligationOwnerCap type");
    }
    assertFieldsWithTypesArgsMatch(item, [typeArg]);

    return ObligationOwnerCap.reified(typeArg).new({
      id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
      obligationId: decodeFromFieldsWithTypes(
        ID.reified(),
        item.fields.obligation_id,
      ),
    });
  }

  static fromBcs<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    data: Uint8Array,
  ): ObligationOwnerCap<ToPhantomTypeArgument<T0>> {
    return ObligationOwnerCap.fromFields(
      typeArg,
      ObligationOwnerCap.bcs.parse(data),
    );
  }

  toJSONField() {
    return {
      id: this.id,
      obligationId: this.obligationId,
    };
  }

  toJSON() {
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField(),
    };
  }

  static fromJSONField<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    field: any,
  ): ObligationOwnerCap<ToPhantomTypeArgument<T0>> {
    return ObligationOwnerCap.reified(typeArg).new({
      id: decodeFromJSONField(UID.reified(), field.id),
      obligationId: decodeFromJSONField(ID.reified(), field.obligationId),
    });
  }

  static fromJSON<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    json: Record<string, any>,
  ): ObligationOwnerCap<ToPhantomTypeArgument<T0>> {
    if (json.$typeName !== ObligationOwnerCap.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }
    assertReifiedTypeArgsMatch(
      composeSuiType(ObligationOwnerCap.$typeName, extractType(typeArg)),
      json.$typeArgs,
      [typeArg],
    );

    return ObligationOwnerCap.fromJSONField(typeArg, json);
  }

  static fromSuiParsedData<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    content: SuiParsedData,
  ): ObligationOwnerCap<ToPhantomTypeArgument<T0>> {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isObligationOwnerCap(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a ObligationOwnerCap object`,
      );
    }
    return ObligationOwnerCap.fromFieldsWithTypes(typeArg, content);
  }

  static fromSuiObjectData<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    data: SuiObjectData,
  ): ObligationOwnerCap<ToPhantomTypeArgument<T0>> {
    if (data.bcs) {
      if (
        data.bcs.dataType !== "moveObject" ||
        !isObligationOwnerCap(data.bcs.type)
      ) {
        throw new Error(`object at is not a ObligationOwnerCap object`);
      }

      const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs;
      if (gotTypeArgs.length !== 1) {
        throw new Error(
          `type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`,
        );
      }
      const gotTypeArg = gotTypeArgs[0] as string;
      const compressedGotType = compressSuiType(gotTypeArg);
      const expectedTypeArg = compressSuiType(extractType(typeArg));
      if (compressedGotType !== expectedTypeArg) {
        throw new Error(
          `type argument mismatch: expected '${expectedTypeArg}' but got '${compressedGotType}'`,
        );
      }

      return ObligationOwnerCap.fromBcs(typeArg, fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return ObligationOwnerCap.fromSuiParsedData(typeArg, data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch<T0 extends PhantomReified<PhantomTypeArgument>>(
    client: SuiClient,
    typeArg: T0,
    id: string,
  ): Promise<ObligationOwnerCap<ToPhantomTypeArgument<T0>>> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching ObligationOwnerCap object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isObligationOwnerCap(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a ObligationOwnerCap object`);
    }

    return ObligationOwnerCap.fromSuiObjectData(typeArg, res.data);
  }
}
